export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Ahmed Ebrahim. All rights reserved.</p>
        <p>Backend Engineer · Laravel & React.js</p>
      </div>
    </footer>
  );
}
