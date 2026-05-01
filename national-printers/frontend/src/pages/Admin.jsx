import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Admin.module.css';

const STATUS_COLORS = {
  new: '#e67e22',
  contacted: '#2980b9',
  confirmed: '#27ae60',
  completed: '#7f8c8d',
};

export default function Admin() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchInquiries = async () => {
    try {
      const { data } = await axios.get('/api/inquiries');
      setInquiries(data);
    } catch {
      setError('Failed to load inquiries.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchInquiries(); }, []);

  const updateStatus = async (id, status) => {
    await axios.patch(`/api/inquiries/${id}`, { status });
    setInquiries((prev) => prev.map((i) => (i._id === id ? { ...i, status } : i)));
  };

  const deleteInquiry = async (id) => {
    if (!window.confirm('Delete this inquiry?')) return;
    await axios.delete(`/api/inquiries/${id}`);
    setInquiries((prev) => prev.filter((i) => i._id !== id));
  };

  if (loading) return <div className={styles.center}>Loading...</div>;
  if (error) return <div className={styles.center}>{error}</div>;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Admin — Inquiries</h1>
        <span className={styles.count}>{inquiries.length} total</span>
      </div>

      {inquiries.length === 0 ? (
        <p className={styles.empty}>No inquiries yet.</p>
      ) : (
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Event</th>
                <th>Date</th>
                <th>Message</th>
                <th>Status</th>
                <th>Received</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inq) => (
                <tr key={inq._id}>
                  <td>{inq.name}</td>
                  <td><a href={`tel:${inq.phone}`}>{inq.phone}</a></td>
                  <td>{inq.eventType}</td>
                  <td>{inq.eventDate || '—'}</td>
                  <td className={styles.msg}>{inq.message || '—'}</td>
                  <td>
                    <select
                      value={inq.status}
                      onChange={(e) => updateStatus(inq._id, e.target.value)}
                      style={{ color: STATUS_COLORS[inq.status] }}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                  <td>{new Date(inq.createdAt).toLocaleDateString()}</td>
                  <td>
                    <div className={styles.actions}>
                      <a href={`https://wa.me/91${inq.phone}`} target="_blank" rel="noreferrer" className={styles.wa}>💬</a>
                      <button onClick={() => deleteInquiry(inq._id)} className={styles.del}>🗑</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
