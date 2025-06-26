import Link from "next/link"
function NavBar() {
    return (
        <nav className=" my-4 flex justify-around items-center">
            <div>
                <h2 className=" text-2xl">OM | Blogs</h2>
            </div>
            <div className=" hidden lg:block border-1 border-black rounded-2xl px-4 ">
                <ul className=" flex space-x-4 ">
                    <li className={` cursor-pointer font-semibold hover:bg-black hover:text-white p-1 px-2 rounded-2xl m-1`}>
                        <Link href="#">Home</Link>
                    </li>
                    <li className={` cursor-pointer font-semibold hover:bg-black hover:text-white p-1 px-2 rounded-2xl m-1`}>
                        <Link href='authors'>Authors</Link>
                    </li>
                    <li className={` cursor-pointer font-semibold hover:bg-black hover:text-white p-1 px-2 rounded-2xl m-1`}>
                        <Link href='about'>About</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Link href='/login' className="  rounded-2xl border-1 px-3 py-1 cursor-pointer shadow-2xl shadow-black hover:bg-black hover:text-white"> Login to Write</Link>
            </div>
        </nav>
    )
}

export default NavBar