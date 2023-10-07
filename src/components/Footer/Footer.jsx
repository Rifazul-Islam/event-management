

const Footer = () => {
return (
<div>
<footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
  <span> <img className="w-32" src="https://i.ibb.co/KmwK7r0/logo.png" alt="" /></span>
    <p>Educational and Trining  Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Workshops</a> 
    <a className="link link-hover">Career</a> 
    <a className="link link-hover">Educational</a> 
    <a className="link link-hover">Training </a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>                                  
</div>
);
};

export default Footer;