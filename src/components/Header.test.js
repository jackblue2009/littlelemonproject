const { default: TestRunner } = require("jest-runner")
const Header = require('./Header');

test('renders the header of the page', () => {
    expect(Header()).toBe(`
    <header>
        <img src={logo} alt='little-lemon-logo' />
        <Nav />
    </header>
    `);
});