import { CiSquarePlus } from "react-icons/ci";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

let item1 = {};
let item2 = {};
function ButtonSoSanh() {
  /* eslint-disable no-restricted-globals */
  const location = useLocation();

  console.log(location)
  if (location.state && location.state.key === "phone1") {
    item1 = location.state;

  } 
  else if (location.state && location.state.key === "phone2") {
    item2 = location.state;

  } 
  else {
    // Xử lý khi không xác định được location
    return (
      <div className="inner">
        <div class="row">
          <div
            class="col-sm border"
            style={{
              display: "flex",
              alignItems: "center",
              margin: "auto",
              height: 100,
            }}
            >
            Chon dien thoai muon so sanh
          </div>
          <div class="col-sm border">
            <div className="icon-add">
              <Link to="/Iphone1">
                <CiSquarePlus className="subicon-add" />
              </Link>
            </div>
          </div>
          <div class="col-sm border">
            <div className="icon-add">
              <Link to="/Iphone2">
                <CiSquarePlus className="subicon-add" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  console.log(item1,item2);
  return (
    <div className="inner">
    <div className="row"></div>
    <div className="row mt-4">
      <div
        className="col-sm border"
        style={{
          display: "flex",
          alignItems: "center",
          margin: "auto",
          height: 180,
        }}
      ></div>
      {(Object.keys(item2).length === 0) ? (
        <>
        <div class="col-sm border">
          <div className="icon-add">
            <p>{item1.name}</p>
            <img
              style={{ height: 160 }}
              src={`https://localhost:7126/images/product/${item1.image}`}
              alt="a"
            />
          </div>
        </div>
        <div class="col-sm border">
          <div className="icon-add">
            <Link to="/Iphone2">
              <CiSquarePlus className="subicon-add" />
            </Link>
          </div>
        </div>
      </>
    ) : (
      // Ngược lại, render nội dung khác
      <>
        <div class="col-sm border">
          <div className="icon-add">
            <p>{item1.name}</p>
            <img
              style={{ height: 160 }}
              src={`https://localhost:7126/images/product/${item1.image}`}
              alt="a"
            />
          </div>
        </div>
        <div class="col-sm border">
          <div className="icon-add">
            <p>{item2.name}</p>
            <img
              style={{ height: 160 }}
              src={`https://localhost:7126/images/product/${item2.image}`}
              alt="a"
            />
          </div>
        </div>
      </>
      )}
    </div>
 <Link to="/SoSanh" state={{item1,item2}}
   className="border mt-4 btn-nextSoSanh"
   style={{
     width: 150,
     height: 50,
     display: "flex",
     margin: "auto",
     alignItems: "center",
     justifyContent: "space-evenly",
   }}
 >
   Next <GrLinkNext />
 </Link> 
  </div>
  );
}

export default ButtonSoSanh;
