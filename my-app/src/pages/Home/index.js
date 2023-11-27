import classNames from "classnames/bind";
import styles from "./Home.modual.scss";
import { Container, Row, Col, Button } from "react-bootstrap";

const cx = classNames.bind(styles);
function Home() {
  return (
    <div>
      <Container className={cx("d-inline-flex justify-content-start")} id={cx("logo")} >
        <a href="#" className={cx("border-logo-brand")}>
          <img className={cx("logo-brand")} src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" alt="a"/>
        </a>
        <a href="#" className={cx("border-logo-brand")}>
          <img className={cx("logo-brand")} src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" alt="a"/>
        </a>
        <a href="#" className={cx("border-logo-brand")}>
          <img className={cx("logo-brand")} src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" alt="a"/>
        </a>
        <a href="#" className={cx("border-logo-brand")}>
          <img className={cx("logo-brand")} src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" alt="a"/>
        </a>
        <a href="#" className={cx("border-logo-brand")}>
          <img className={cx("logo-brand")} src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" alt="a"/>
        </a>
        <a href="#" className={cx("border-logo-brand")}>
          <img className={cx("logo-brand")} src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" alt="a"/>
        </a>
        
        
      </Container>
    </div>
  );
}

export default Home;
