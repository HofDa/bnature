const navItems = [
{ label: "Leistungen", href: "#leistungen" },
{ label: "Projekte", href: "#projekte" },
{ label: "Team", href: "#team" },
{ label: "Kontakt", href: "#kontakt" },
];


export default function Header() {
return (
<header className="sticky top-0 z-50 border-b border-primary-200/40 bg-sand-100 backdrop-blur-sm">
<div className="container flex items-center justify-between py-3">
<div className="font-display text-lg font-bold text-primary-700">b*nature</div>
<nav className="hidden gap-6 md:flex">
{navItems.map((item) => (
<a
key={item.href}
href={item.href}
className="text-sm font-medium text-bark-700 hover:text-primary-700"
>
{item.label}
</a>
))}
</nav>
</div>
</header>
);
}