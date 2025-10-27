export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md transition">
      {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}
      {children}
    </div>
  );
}
