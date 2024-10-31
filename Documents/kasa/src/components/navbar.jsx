import "../sass/index.scss";
function Navbar() {
  return (
    <div className="ks-navbar">
      <div className="ks-logo">
        <img src="../assets/logo.png" alt="logo de kasa" />
      </div>
      <div className="ks-lien-nav">
        <a href="#id">Accueil</a>
        <a href="#id">A Propos</a>
      </div>
    </div>
  );
}
export default Navbar;
