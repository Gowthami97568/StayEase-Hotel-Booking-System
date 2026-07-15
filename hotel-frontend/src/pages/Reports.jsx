import { useMemo, useRef, useState } from "react";
import * as XLSX from "xlsx";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const MONTHLY_REVENUE = [
  { month: "January", revenue: 150000, bookings: 95 },
  { month: "February", revenue: 175000, bookings: 112 },
  { month: "March", revenue: 210000, bookings: 140 },
  { month: "April", revenue: 230000, bookings: 155 },
  { month: "May", revenue: 285000, bookings: 180 },
  { month: "June", revenue: 260000, bookings: 165 },
  { month: "July", revenue: 305000, bookings: 195 },
  { month: "August", revenue: 320000, bookings: 205 },
  { month: "September", revenue: 240000, bookings: 150 },
  { month: "October", revenue: 275000, bookings: 172 },
  { month: "November", revenue: 298000, bookings: 188 },
  { month: "December", revenue: 350000, bookings: 220 },
];

const TOP_HOTELS = [
  { hotel: "Grand Horizon", bookings: 220, revenue: 320000, rating: 4.8 },
  { hotel: "Royal Palace", bookings: 180, revenue: 280000, rating: 4.7 },
  { hotel: "Sea View Resort", bookings: 160, revenue: 240000, rating: 4.6 },
  { hotel: "Krishna Residency", bookings: 140, revenue: 198000, rating: 4.5 },
  { hotel: "Coastal Inn", bookings: 110, revenue: 152000, rating: 4.3 },
];

function formatINR(n) {
  return "\u20B9" + n.toLocaleString("en-IN");
}

function Reports() {
  const printRef = useRef(null);
  const [isExporting, setIsExporting] = useState(false);

  const totals = useMemo(() => {
    const totalRevenue = MONTHLY_REVENUE.reduce((sum, m) => sum + m.revenue, 0);
    const totalBookings = MONTHLY_REVENUE.reduce((sum, m) => sum + m.bookings, 0);
    return { totalRevenue, totalBookings };
  }, []);

  const totalCustomers = 1320;
  const totalHotels = 15;

  const handleDownloadPdf = () => {
    // Opens the browser print dialog; the person can save it as a PDF from there.
    window.print();
  };

  const handleExportExcel = () => {
    setIsExporting(true);
    try {
      const wb = XLSX.utils.book_new();

      const summarySheet = XLSX.utils.json_to_sheet([
        { Metric: "Total Revenue", Value: totals.totalRevenue },
        { Metric: "Total Bookings", Value: totals.totalBookings },
        { Metric: "Total Customers", Value: totalCustomers },
        { Metric: "Total Hotels", Value: totalHotels },
      ]);
      XLSX.utils.book_append_sheet(wb, summarySheet, "Summary");

      const monthlySheet = XLSX.utils.json_to_sheet(
        MONTHLY_REVENUE.map((m) => ({
          Month: m.month,
          Revenue: m.revenue,
          Bookings: m.bookings,
        }))
      );
      XLSX.utils.book_append_sheet(wb, monthlySheet, "Monthly Revenue");

      const hotelsSheet = XLSX.utils.json_to_sheet(
        TOP_HOTELS.map((h) => ({
          Hotel: h.hotel,
          Bookings: h.bookings,
          Revenue: h.revenue,
          Rating: h.rating,
        }))
      );
      XLSX.utils.book_append_sheet(wb, hotelsSheet, "Top Hotels");

      XLSX.writeFile(wb, "hotel-reports.xlsx");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="reports-page" ref={printRef}>
      <style>{`
        .reports-page {
          padding: 30px;
          background: #f5f7fb;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          box-sizing: border-box;
        }
        .reports-page * { box-sizing: border-box; }

        .reports-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 30px;
        }
        .reports-page h1 { color: #003580; margin: 0; }
        .reports-page .subtitle { margin: 4px 0 0; color: #64748b; font-size: 14px; }

        .report-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 35px;
        }

        .report-card {
          background: white;
          padding: 25px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0,0,0,.1);
        }
        .report-card h3 { color: #666; margin: 0 0 10px; font-size: 14px; font-weight: 600; }
        .report-card h2 { color: #003580; font-size: 32px; margin: 0; }

        .report-section {
          background: white;
          padding: 20px;
          margin-top: 30px;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0,0,0,.1);
        }
        .report-section h2 {
          color: #003580;
          margin: 0 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }
        .report-section .section-note { font-size: 13px; color: #94a3b8; font-weight: 400; }

        table { width: 100%; border-collapse: collapse; }

        th { background: #003580; color: white; padding: 15px; text-align: center; }
        td { padding: 15px; text-align: center; border-bottom: 1px solid #ddd; }
        tbody tr:hover { background: #f0f6ff; }
        tbody tr:last-child td { border-bottom: none; }

        .totals-row td { font-weight: 700; background: #f8fafc; }

        .rank-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #eef2f7;
          color: #003580;
          font-weight: 700;
          font-size: 13px;
        }

        .report-buttons {
          margin-top: 35px;
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .pdf-btn {
          background: #dc3545;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .pdf-btn:hover { background: #bb2d3b; transform: translateY(-2px); }

        .excel-btn {
          background: #198754;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .excel-btn:hover:not(:disabled) { background: #157347; transform: translateY(-2px); }
        .excel-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        @media print {
          .report-buttons { display: none; }
          .reports-page { background: white; padding: 0; }
          .report-card, .report-section { box-shadow: none; border: 1px solid #ddd; }
        }

        @media (max-width: 900px) {
          .report-cards { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .report-cards { grid-template-columns: 1fr; }
          .reports-page { padding: 16px; }
        }
      `}</style>

      <div className="reports-header">
        <div>
          <h1>Reports &amp; Analytics</h1>
          <p className="subtitle">Year-to-date performance across all hotels</p>
        </div>
      </div>

      <div className="report-cards">
        <div className="report-card">
          <h3>Total Revenue</h3>
          <h2>{formatINR(totals.totalRevenue)}</h2>
        </div>

        <div className="report-card">
          <h3>Total Bookings</h3>
          <h2>{totals.totalBookings}</h2>
        </div>

        <div className="report-card">
          <h3>Total Customers</h3>
          <h2>{totalCustomers.toLocaleString("en-IN")}</h2>
        </div>

        <div className="report-card">
          <h3>Total Hotels</h3>
          <h2>{totalHotels}</h2>
        </div>
      </div>

      <div className="report-section">
        <h2>
          Revenue Trend
          <span className="section-note">Monthly revenue, current year</span>
        </h2>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={MONTHLY_REVENUE} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e9f0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} tickFormatter={(m) => m.slice(0, 3)} />
            <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `${v / 1000}k`} />
            <Tooltip formatter={(value) => formatINR(value)} />
            <Line type="monotone" dataKey="revenue" stroke="#0d6efd" strokeWidth={3} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="report-section">
        <h2>Monthly Revenue</h2>
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Revenue</th>
              <th>Bookings</th>
            </tr>
          </thead>
          <tbody>
            {MONTHLY_REVENUE.map((m) => (
              <tr key={m.month}>
                <td>{m.month}</td>
                <td>{formatINR(m.revenue)}</td>
                <td>{m.bookings}</td>
              </tr>
            ))}
            <tr className="totals-row">
              <td>Total</td>
              <td>{formatINR(totals.totalRevenue)}</td>
              <td>{totals.totalBookings}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="report-section">
        <h2>Top Performing Hotels</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Hotel</th>
              <th>Bookings</th>
              <th>Revenue</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {TOP_HOTELS.map((h, i) => (
              <tr key={h.hotel}>
                <td>
                  <span className="rank-badge">{i + 1}</span>
                </td>
                <td>{h.hotel}</td>
                <td>{h.bookings}</td>
                <td>{formatINR(h.revenue)}</td>
                <td>{"\u2B50"}{h.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="report-buttons">
        <button className="pdf-btn" onClick={handleDownloadPdf}>
          Download PDF
        </button>
        <button className="excel-btn" onClick={handleExportExcel} disabled={isExporting}>
          {isExporting ? "Exporting..." : "Export Excel"}
        </button>
      </div>
    </div>
  );
}

export default Reports;