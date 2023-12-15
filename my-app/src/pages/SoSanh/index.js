import { FaCheck } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import "./SoSanh.modual.scss"

function SoSanh() {
  const location=useLocation();
  const{item1,item2}=location.state
  return (
    <div className="inner">
      <div class="row">
        <div class="col-sm border">Hinh anh minh hoa</div>
        <div class="col-sm border"><img style={{width:160}} src={`https://localhost:7126/images/product/${item1.image}`} alt=""/></div>
        <div class="col-sm border"><img style={{width:160}} src={`https://localhost:7126/images/product/${item2.image}`} alt="" /></div>
      </div>
      <div class="row">
        <div className="titleSoSanh">
        <strong>Man Hinh</strong>
        </div>
        <div class="col-sm border">Công nghệ màn hình</div>
        <div class="col-sm border">OLED</div>
        <div class="col-sm border">OLED</div>
      </div>
      <div class="row">
        <div class="col-sm border">Độ phân giải</div>
        <div class="col-sm border">Super Retina XDR (1290 x 2796 Pixels)</div>
        <div class="col-sm border">Super Retina XDR (1290 x 2796 Pixels)</div>
      </div>
      <div class="row">
        <div class="col-sm border">Kích thước màn hình</div>
        <div class="col-sm border">6.7"</div>
        <div class="col-sm border">6.7"</div>
      </div><div class="row">
        <div class="col-sm border">Độ sáng tối đa</div>
        <div class="col-sm border">2000 nits</div>
        <div class="col-sm border">2000 nits</div>
      </div>
      <div class="row">
      <div className="titleSoSanh">
       <strong>Camera Sau</strong>
        </div>
        <div class="col-sm border">Độ phân giải</div>
        <div class="col-sm border">{item1.camSau}</div>
        <div class="col-sm border">{item2.camSau}</div>
      </div>
      <div class="row">
        <div class="col-sm border">Quay phim</div>
        <div class="col-sm border">
            <ul>
                <li>HD720p@30fbs</li>
                <li>FULL HD1080p@30fbs</li>
                <li>FULL HD1080p@60fbs</li>
                <li>4K 2160@24fbs</li>
                <li>4K 2160@30fbs</li>
            </ul>
        </div>
        <div class="col-sm border">
        <ul>
                <li>HD720p@30fbs</li>
                <li>FULL HD1080p@30fbs</li>
                <li>FULL HD1080p@60fbs</li>
                <li>4K 2160@24fbs</li>
                <li>4K 2160@30fbs</li>
            </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-sm border">Đèn FLASH</div>
        <div class="col-sm border"><FaCheck /></div>
        <div class="col-sm border"><FaCheck /></div>
      </div>
      <div class="row">
        <div class="col-sm border">Tính năng</div>
        <div class="col-sm border">
        <ul>
                <li>Toàn cảnh(Panorama)</li>
                <li>Chống rung quang học</li>
                <li>Trôi nhanh thời gian</li>
                <li>Quay chậm</li>
                <li>Xóa phông</li>
            </ul>
        </div><div class="col-sm border">
        <ul>
                <li>Toàn cảnh(Panorama)</li>
                <li>Chống rung quang học</li>
                <li>Trôi nhanh thời gian</li>
                <li>Quay chậm</li>
                <li>Xóa phông</li>
            </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-sm border">Độ phân giải</div>
        <div class="col-sm border">12MB</div>
        <div class="col-sm border">12MB </div>
      </div>
      <div class="row">
        <div class="col-sm border">Tính năng</div>
        <div class="col-sm border">
        <ul>
                <li>Quay video fullHD</li>
                <li>Quay video 4k</li>
                <li>Trôi nhanh thời gian</li>
                <li>Quay chậm</li>
                <li>Xóa phông</li>
            </ul>
        </div><div class="col-sm border">
        <ul>
                <li>Quay video fullHD</li>
                <li>Quay video 4k</li>
                <li>Trôi nhanh thời gian</li>
                <li>Quay chậm</li>
                <li>Xóa phông</li>
            </ul>
        </div>
      </div>
      <div class="row">
      <div className="titleSoSanh">
        <strong>Bộ nhớ lưu trữ</strong>
        </div>
        <div class="col-sm border">Ram</div>
        <div class="col-sm border">6 GB</div>
        <div class="col-sm border">6 GB</div>
      </div>
      <div class="row">
        <div class="col-sm border">Dung lượng lưu trữ</div>
        <div class="col-sm border">{item1.rom}</div>
        <div class="col-sm border">{item2.rom}</div>
      </div>
      <div class="row">
        <div class="col-sm border">Dung lượng còn lại (khả dụng) khoảng</div>
        <div class="col-sm border">113 GB</div>
        <div class="col-sm border"></div>
      </div><div class="row">
        <div class="col-sm border">Thẻ nhớ</div>
        <div class="col-sm border">Không</div>
        <div class="col-sm border">Không</div>
      </div><div class="row">
        <div class="col-sm border">Danh bạ</div>
        <div class="col-sm border">Không giới hạn</div>
        <div class="col-sm border">Không giới hạn</div>
      </div>
    </div>
    
  );
}

export default SoSanh;
