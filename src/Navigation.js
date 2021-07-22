import { useState } from "react"
import Button from "./Button"
import Dialog from "./Dialog"

function RuleBox({ isOpen, onClose }) {
    return (
        <Dialog isOpen={isOpen} onClose={onClose}>
            <h3 style={{ marginTop: 0 }}>Thể lệ</h3>
            Đây là dịch vụ thuê bao cho phép tải và xem video miễn phí 3g. Đây là hình thức trừ cước theo gói dịch vụ bạn đã đăng ký và chỉ dừng khi bạn nhắn tin hủy dịch vụ. Ngay khi bạn nhắn tin đăng ký tham gia dịch vụ, một tin nhắn xác nhận sẽ được gửi tới di động của bạn và việc đó đồng nghĩa bạn đã đăng ký thành công dịch vụ của chúng tôi. Khi đăng ký là bạn đã đồng ý tham gia dịch vụ với giá cước của dịch vụ theo như sau: nếu bạn là thuê bao Viettel (3000vnd/ngày) và Mobifone (3000vnd/ngày) và Vinaphone (3000vnd/ngày). Để sử dụng dịch vụ, điện thoại của bạn cần được hỗ trợ WAP/GPRS/UMTS. Nếu bạn dưới 16 tuổi vui lòng chỉ sử dụng dịch vụ khi có sự đồng ý của bố mẹ hoặc người giám hộ hợp pháp. Giá của dịch vụ được áp dụng theo khung giá tiêu chuẩn mà nhà khai thác mạng quy định. Dịch vụ này không được liên kết hay được tài trợ bởi bất kỳ sản phẩm mà các nhà bán lẻ niêm yết. Thương hiệu, nhãn hiệu, biểu tượng dịch vụ (bao gồm nhưng không giới hạn tên cá nhân của các sản phẩm và các nhà bán lẻ) là tài sản của chủ sở hữu dịch vụ.
            © 2021 telecom.vin  All Rights Reserved
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}><Button text="Đã hiểu" onClick={onClose} /></div>
        </Dialog>
    )
}

function AdwardBox({ isOpen, onClose }) {
    return (
        <Dialog isOpen={isOpen} onClose={onClose}>
            <h3 style={{ marginTop: 0 }}>Giải thưởng</h3>
            Mô tả giải thưởng
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}><Button text="Đã hiểu" onClick={onClose} /></div>
        </Dialog>
    )
}

function Navigation() {
    const [box, setBox] = useState(null)
    return (
        <>
            <div style={styles.container}>
                <div style={styles.item} onClick={() => {
                    window.lp.call()
                }}>
                    <img srcSet="call.png" alt="Call" style={{ width: 24, height: 24 }} />
                </div>
                <div
                    onClick={() => setBox('rule')}
                    style={styles.item}
                >Thể lệ</div>
                <div
                    onClick={() => setBox('adward')}
                    style={styles.item}
                >Giải thưởng</div>
            </div>
            <RuleBox isOpen={box === 'rule'} onClose={() => setBox(null)} />
            <AdwardBox isOpen={box === 'adward'} onClose={() => setBox(null)} />
        </>
    )
}

const styles = {
    container: {
        maxWidth: 560,
        width: '100%',
        margin: 'auto',
        height: 56,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'stretch',
        alignItems: 'center'
    },
    item: {
        flex: '1 1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 12,
        fontWeight: 500
    }
}

export default Navigation