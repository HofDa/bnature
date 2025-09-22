export default function Footer() {
return (
<footer className="border-t bg-white">
<div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
<div className="text-sm text-gray-600">© {new Date().getFullYear()} b*nature – Aus Südtirol</div>
<nav className="flex gap-4 text-sm text-gray-700">
<a href="#" className="hover:text-gray-900">Impressum</a>
<a href="#" className="hover:text-gray-900">Datenschutz</a>
<a href="#" className="hover:text-gray-900">Cookies</a>
</nav>
</div>
</footer>
)
}