import { CiGift, CiTrash } from "react-icons/ci";
import { FiMinus } from "react-icons/fi";
import { GoPlus, GoShieldCheck } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import Header from "../../layouts/Header";
import styles from "./Payment.modual.scss";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function Payment() {

  const location=useLocation();
  const {totalPrice}=location.state;
  console.log(location)
  return (
    <div>
      <div className="inner ">
        <div className=" w-50 m-auto">
          <div>
            <div className="header-cart d-flex">
              <div className="icon-headerCart">
                <IoIosArrowBack />
              </div>
              <div className="title-cart m-auto">
                <h5>Thanh Toan</h5>
              </div>
            </div>
            <div className="navPayment d-flex justify-content-center">
              <div className="Payment-info Payment-info--active d-flex justify-content-center">
                <span>1.Thong Tin</span>
              </div>
              <div className="Payment-info d-flex justify-content-center">
                <span>2.Thanh Toan</span>
              </div>
            </div>
            <div className="ThongTin">
              <div className="bodyInfo">
                <div className="body-contentUser">
                  <div className="infoUser">
                    <div className="header-infoUser">
                      <p>Thong tin khach hang</p>
                    </div>
                    <div>
                      <div className="contentCart">
                        <div className="block-customer">
                          <div className="box-input_1 d-flex">
                            <div class="form-group box-input">
                              <label for="exampleInputEmail1">Ho Va Ten</label>
                              <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Nhap Ho Va Ten"
                              />
                            </div>
                            <div class="form-group1 box-input">
                              <label for="exampleInputEmail1">
                                So Dien Thoai
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Nhap So Dien Thoai"
                              />
                            </div>
                          </div>
                          <div className="input_2">
                            <div class="form-group">
                              <label for="exampleInputEmail1">Email</label>
                              <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter"
                              />
                            </div>
                          </div>
                          <div className="ThongBaoEmail">
                            <input type="checkbox"></input>
                            <lable> Nhan Email thong bao</lable>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="infoUser1">
                    <div className="header-infoUser">
                      <p>Thong tin nhan hang</p>
                    </div>
                    <div>
                      <div className="contentCart">
                        <div className="block-customer">
                          <div className="box-input_1 d-flex">
                            <div class="form-group box-input">
                              <label for="exampleInputEmail1">
                                Tinh/Thanh Pho
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Nhap Tinh/ThanhPho"
                              />
                            </div>
                            <div class="form-group1 box-input">
                              <label for="exampleInputEmail1">Quan/Huyen</label>
                              <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Nhap Quan/Huyen"
                              />
                            </div>
                          </div>
                          <div className="input_2">
                            <div class="form-group">
                              <label for="exampleInputEmail1">Dia Chi</label>
                              <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Nhap Dia Chi"
                              />
                            </div>
                          </div>
                          <div className="input_2">
                            <div class="form-group">
                              <label for="exampleInputEmail1">
                                Email address
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Ghi Chu Neu Co"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ProductSelectPayment1">
                <div className="sumProduct d-flex justify-content-between">
                  <p>Tong Tien Tam Tinh:</p>
                  <p>{totalPrice}</p>
                </div>
                <div className="clickBuyNow1">
                  <Link to="/cart/ThanhToan" state={{totalPrice}}><button>Tiep Tuc</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
