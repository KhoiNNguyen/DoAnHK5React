import { IoIosArrowDown } from "react-icons/io";

function ThanhToan() {
    return ( <div className="inner">
        <div className="w-50 m-auto">
        <div className="navPayment d-flex justify-content-center">
              <div className="Payment-info  d-flex justify-content-center">
                <span>1.Thong Tin</span>
              </div>
              <div className="Payment-info Payment-info--active d-flex justify-content-center">
                <span>2.Thanh Toan</span>
              </div>
            </div>
        <div className="ThanhToan">
            <div className="bodyPayMent">
              <div className="body-contentUser">
                <div className="infoUser">
                  <div>
                    <div className="contentCart">
                      <div className="block-customer">
                        <div className="box-input_1 d-flex">
                          <div className="form-group inputVoucher d-flex">
                            <input
                              type="email"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Nhap Ma Giam Gia"
                            />
                            <button className="buttonChapNhan">ap dung</button>
                          </div>
                        </div>
                        <div className="infoProductPayMent">
                          <div className="info-paymentProduct">
                            <p>So Luong San Pham</p>
                            <p>01</p>
                          </div>
                          <div className="info-paymentProduct">
                            <p>Tien Hang</p>
                            <p>012321312</p>
                          </div>
                          <div className="info-paymentProduct">
                            <p>Phi Van Chuyen</p>
                            <p>Mien Phi</p>
                          </div>
                        </div>
                        <div className="totalPayment">
                          <p>Tong Tien</p>
                          <p>20.000.000đ</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="infoUser1">
                  <div className="header-infoUser">
                    <p>THONG TIN THANH TOAN</p>
                  </div>
                  <div>
                    <div className="contentCart">
                      <div className="contentThanhToan">
                        <div className="HinhThucThanhToan d-flex">
                          <img
                            style={{ width: 40, height: 40}}
                            src="https://th.bing.com/th/id/OIP.55LklQ0eXZEZzLMLDaAC0QHaEK?w=1600&h=900&rs=1&pid=ImgDetMain"
                            alt=""
                          />
                          <div style={{marginLeft:10}}>
                            <p>Chon hinh thuc thanh toan</p>
                            <span>Nhan them nhieu uu dai</span>
                          </div>
                        </div>
                        <div className="iconShowPayment">
                          <IoIosArrowDown />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="infoUserPayment">
                  <div>
                    <div className="contentCart">
                      <div className="block-customer">
                        <div className="infoProductPayMent1">
                          <div className="info-paymentProduct">
                            <p>Khach Hang</p>
                            <p>Khoi Nguyen</p>
                          </div>
                          <div className="info-paymentProduct">
                            <p>So Dien Thoai</p>
                            <p>0368075277</p>
                          </div>
                          <div className="info-paymentProduct">
                            <p>Email</p>
                            <p>Khoinguyen@gmail.com</p>
                          </div>
                          <div className="info-paymentProduct">
                            <p>Nhan Hang Tai</p>
                            <p>Hem 20 duong 77 phuong tan quy quan 7</p>
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
            <p>0đ</p>
          </div>
          <div className="clickBuyNow1">
            <button>ThanhToan</button>
          </div>
        </div>
            </div>
        </div>
       
    </div> );
}

export default ThanhToan;