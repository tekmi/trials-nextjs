import Link from 'next/link'
import navStyles from './Nav.css';

const posts = [
    {'title': 'Foo'},
    {'title': '2xFoo'},
    {'title': 'Boooo'},
    {'title': 'Cooouuuufds'},
];

const Nav = () => (
    <div>
        <ul className={navStyles.Nav}>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/checkout">
                    <a>Checkout</a>
                </Link>
            </li>
        {posts.map((post, index) => (
            <li key={index}>
                {/* If you click with History API it will work, but once you refresh the page, Nodejs server will not know how to process it... so you must write your own server.js file with express */}
                <Link as={`/post/${index}`} href={{pathname: '/posts', query: {id: index}}}>
                    <a>{post.title}</a>
                </Link>
            </li>
        ))}
            <li>
                <Link href="/dynamic">
                    <a>Dynamic</a>
                </Link>
            </li>
        </ul>
    </div>
);

export default Nav;
