import Navbar from '../../components/Navbar/navbar';
import Footer from '../../Components/Footer/Footer';
import CardComp from '../../Components/Card/Card';
import CarouselComp from '../../Components/Carousel/Carousel';

const Home = () => {
    const cardData = [
        {
            image: 'https://thumb.viva.co.id/media/frontend/thumbs3/2016/09/30/57ee2f88bbb5b-ternyata-lima-barang-keren-ini-dijual-di-situs-jual-beli-online_665_374.jpg',
            title: 'Sepatu',
            description: 'Produk Kita'
        },
        {
            image: 'https://thumb.viva.co.id/media/frontend/thumbs3/2016/09/30/57ee2f88bbb5b-ternyata-lima-barang-keren-ini-dijual-di-situs-jual-beli-online_665_374.jpg',
            title: 'Sepatu',
            description: 'Produk Kita'
        },
        {
            image: 'https://thumb.viva.co.id/media/frontend/thumbs3/2016/09/30/57ee2f88bbb5b-ternyata-lima-barang-keren-ini-dijual-di-situs-jual-beli-online_665_374.jpg',
            title: 'Sepatu',
            description: 'Produk Kita'
        },
        {
            image: 'https://thumb.viva.co.id/media/frontend/thumbs3/2016/09/30/57ee2f88bbb5b-ternyata-lima-barang-keren-ini-dijual-di-situs-jual-beli-online_665_374.jpg',
            title: 'Sepatu',
            description: 'Produk Kita'
        },
        {
            image: 'https://thumb.viva.co.id/media/frontend/thumbs3/2016/09/30/57ee2f88bbb5b-ternyata-lima-barang-keren-ini-dijual-di-situs-jual-beli-online_665_374.jpg',
            title: 'Sepatu',
            description: 'Produk Kita'
        },
    ];
    return (
        <div>
            <Navbar />
            <div>
                <div className='my-4'>
                    <img src="./background/banner.jpg" alt="" className='p-10 w-full rounded-[60px] h-[400px] bg-no-repeat bg-contain' />
                </div>
                <div className='flex items-center mx-[170px] justify-center'>
                    <CarouselComp />
                </div>
                <h1 className='px-[160px] my-16'>Kategori 1</h1>
                <div className='w-full flex flex-wrap justify-center bg-gray-50 p-6'>
                    {cardData.map((item, index) => (
                        <CardComp.Card
                            key={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    ))}  </div>
                <h1 className='px-[160px] my-16'>Kategori 2</h1>
                <div className='w-full mb-20 flex flex-wrap justify-center p-6 bg-slate-50'>
                    {cardData.map((item, index) => (
                        <CardComp.Card
                            key={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    ))} </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
