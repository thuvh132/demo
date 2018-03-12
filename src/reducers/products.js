var initialState = [
    {
        id: 1, 
        name: 'Iphone X',
        image: 'https://znews-photo-td.zadn.vn/w660/Uploaded/rik_rdcvcvwt_wc/2018_01_19/iPhone_X.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 15
    },
    {
        id: 2, 
        name: 'SamSung Note 9',
        image: 'https://cdn.viettelstore.vn/Images/Product/ProductArchive/454/9501/man-hinh-galaxy-note-9%20(1).png',
        description: 'Sản phẩm do SamSung sản xuất',
        price: 400,
        inventory: 10
    },
    {
        id: 3, 
        name: 'Asus Zenfone 2',
        image: 'https://hc.com.vn/media/wysiwyg/Dien-thoai/asus-zenfone-2.png',
        description: 'Sản phẩm do Asus sản xuất',
        price: 300,
        inventory: 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
}

export default products;  