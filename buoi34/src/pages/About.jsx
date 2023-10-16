import Pagelayout from "../components/Pagelayout"
import {Link} from "react-router-dom"

function About() {
  return (
    <Pagelayout>
      <div>Cong ty pizza thanh lap vao nam 2005
      Số điện thoại cửa hàng : 1900 1822
      </div>

    <div>Danh sach cac chi nhanh:
      
    <div className="text-center">
                <Link
                  className="inline-block text-sm text-blue-700 align-baseline hover:text-red-900"
                  to="https://maps.app.goo.gl/u7A972MpC8S2EpzL8"
                >
                  1502 Huỳnh Tấn Phát, Phường Phú Mỹ, Quận 7
                  
                </Link>
                </div>

     <div className="text-center">
                <Link
                  className="inline-block text-sm text-blue-700 align-baseline hover:text-red-900"
                  to="https://maps.app.goo.gl/zm2wEH4SJa9TYKiw9"
                >
                  397 Đ. Nguyễn Tri Phương, Phường 5, Quận 10
                 
                </Link>
     </div>

                <div className="text-center">
                <Link
                  className="inline-block text-sm text-blue-700 align-baseline hover:text-red-900"
                  to="https://maps.app.goo.gl/78f1LDmnHaLeWfiV6"
                >
                  307A Hồng Bàng, Phường 11, Quận 5
                 
                </Link>
    </div>

    </div>

    </Pagelayout>
  )
}

export default About