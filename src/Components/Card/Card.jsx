import React, { useState } from 'react';
import { Button, Alert, Space } from 'antd';
import { Card } from 'antd';
const CardComp = {
    Card: ({ image, title, description }) => {
        return (
            <div className="w-[250px] mx-[20px] rounded-[10px]">
                <img
                    className="rounded-tl-[10px] h-[255px] rounded-tr-[10px]"
                    src={image}
                    alt=""
                />
                <div className="px-2 py-3">
                    <h5 className="my-2 text-[20px] font-bold">{title}</h5>
                    <p className="text-[#424242] my-4 text-[14px]">{description}</p>
                    <Button className='w-full'>Beli</Button>
                </div>
            </div>
        )
    },
    CardCarousel: ({ image }) => {
        return (
            <div className="rounded-[10px]">
                <img
                    className="rounded-tl-[10px] w-[200px] h-[255px] rounded-tr-[10px]"
                    src={image}
                    alt=""
                />
            </div>
        )
    },
    CardKeranjnag: (({ image }) => {
        const { Meta } = Card;
        const [isAlertVisible, setIsAlertVisible] = useState(false);

        const handleDeleteClick = () => {
            setIsAlertVisible(true);
        };
        const handleDeleteConfirm = () => {
            // 
            setIsAlertVisible(false);
        };
        return (
            <div className='w-[600px] p-3 h-[220px]'>
                {/* By Aldi */}
                <Card
                    hoverable
                    style={{ width: 250 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="NamaBarang" />
                    <Meta title="HargaBarang" description="SisaBarang" /><br />
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Button block>
                            Beli Sekarang
                        </Button>
                    </Space>
                </Card>

                {isAlertVisible && (
                    <Alert
                        message="Konfirmasi Hapus Pesanan"
                        description="Anda yakin ingin menghapus pesanan ini?"
                        type="info"
                        showIcon
                        closable
                        action={
                            <div className='mt-5'>
                                <Button size="small" onClick={handleDeleteConfirm}>
                                    Ya
                                </Button>
                            </div>
                        }
                    />
                )}
            </div>
        )
    })
}

export default CardComp;
