const navItems = [
{ label: "Leistungen", href: "#leistungen" },
{ label: "Projekte", href: "#projekte" },
{ label: "Team", href: "#team" },
{ label: "Kontakt", href: "#kontakt" },
];


export default function Header() {
return (
<header className="sticky top-0 z-50 border-b border-primary-200/40 bg-white/80 backdrop-blur ring-1 ring-sand-200">
<div className="container flex items-center justify-between py-3">
<div className="font-display text-lg font-bold text-primary-700">b*nature</div>
<nav className="hidden gap-6 md:flex">
{navItems.map((item) => (
<a
key={item.href}
href={item.href}
className="text-primary-800 hover:text-primary-900"
>
{item.label}
</a>
))}
</nav>
</div>
</header>
);
}