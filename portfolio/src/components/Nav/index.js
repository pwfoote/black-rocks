import React from 'react';

function Nav() {
    function categorySelected() {
        console.log("hello")
    }

    const categories = [
        {
          name: "Portfolio",
          description:
            "My Completed Projects",
        },
      ];

    return (
<header>
    <h2>
        <a href="/">
        P.W. Foote
        </a>
    </h2>
    <nav>
        <ul className="flex-row">
        <li className="mx-2">
            <a href="#about">
            About Me
            </a>
        </li>
        <li>
            <span>Contact</span>
        </li>
        {categories.map((category) => (
            <li 
            className="mx-1"
            key = {category.name}
            >
                <span onClick={ categorySelected} >
                    {category.name}
                </span>
            </li>
        ))}
        </ul>
    </nav>
</header>
    );
}

export default Nav;