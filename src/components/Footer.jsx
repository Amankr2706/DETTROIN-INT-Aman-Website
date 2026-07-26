function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        <div>
          <h4 className="text-white font-bold text-lg mb-2">Pavna School</h4>
          <p className="text-sm text-slate-400">
            Nurturing future leaders through holistic education since 1998.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1 text-slate-400">
            <li>Home</li>
            <li>About</li>
            <li>Admissions</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Connect</h4>
          <p className="text-sm text-slate-400">📞 +91 98765 43210</p>
          <p className="text-sm text-slate-400">✉️ info@pavnaschool.com</p>
        </div>
      </div>
      <p className="text-center text-xs text-slate-500 mt-8">
        © {new Date().getFullYear()} Pavna School. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;