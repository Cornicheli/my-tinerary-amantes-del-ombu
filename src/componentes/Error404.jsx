import "../componentes/error404.css";
const Error404 = () => {
  return (
    <div className="padre">
      <div>
        <p> Esto es el header que despues se agreaga</p>
        </div>
  <div className="mainbox">
    <div className="err">4</div>
    <p className="far">0</p>
    <div className="err2">4</div>
    <div className="msg">Maybe this page moved? <br /> Got deleted? <br/> Is hiding out in quarantine? <br /> Never existed in the first place? <br/> Try Again </div>
<div className="msg1">
         <a href="#"> Home</a> 
</div> 
  </div>
      <div>
        <p> Esto es el footer que despues se agrega </p>
        </div>
    </div>
  );
};
export default Error404;