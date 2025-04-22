import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 p-5 border-gray-800 border-t  text-white bottom-0 left-0 right-0">
      <article className="flex justify-between items-center">
        <Link href="/pages/subscribe" className="border rounded-sm my-2 px-4 py-2 duration-700 hover:text-black hover:shadow-white/50 hover:shadow-lg hover:border-white hover:bg-white/85">Оформить подписку</Link>
        {/* сделать при нажатии на кнопку выходит зарегаться */}
        
      </article>
      <p className="text-center">&copy; {new Date().getDate()} / {new Date().getMonth() + 1} / {new Date().getFullYear()}</p>
    </footer>
  );
}
