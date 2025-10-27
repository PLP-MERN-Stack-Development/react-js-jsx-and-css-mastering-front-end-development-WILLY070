export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-4 text-sm">
      © {new Date().getFullYear()} ReactTaskApp. All rights reserved.
    </footer>
  );
}
