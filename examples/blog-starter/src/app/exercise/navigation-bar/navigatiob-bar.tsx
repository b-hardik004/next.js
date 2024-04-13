import React from 'react';
import Link from 'next/link';
import Classes from './navigatiob-bar.module.scss'

const NavigationBar = () => {
    return (
        <div id="navigation-bar">
            <nav className={Classes['nav-bar']}>
                <ul>
                    <li><Link href="/" id="logo">Home</Link></li>
                    <li><Link href='/exercise/new-blog'>New Blog</Link></li>
                    <li><Link href='/exercise/api-blog'>API Blog</Link></li>
                    <li><Link href='/exercise/nextjs-skills'>NextJS Skills</Link></li>
                    <li><Link href='/exercise/nextjs-skills/image-component'>Image Component</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default React.memo(NavigationBar);