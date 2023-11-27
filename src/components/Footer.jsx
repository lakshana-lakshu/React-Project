
function Footer() {
    let year = new Date().getFullYear();
    return (
      <footer style={{left:"0px"}} className="fixed bottom-0 w-full text-center text-violet-200 text-sm p-3 bg-violet-900">
        {" "}
        <a className="text-cyan-200" href="https://github.com/afif-dev" target="_blank" rel="noreferrer">
          @ contact us through toll free  number  1-800-910-5524 / All rights reserved @ copyright2023
        </a>
      </footer>
    );
  }
  
  export default Footer;
  