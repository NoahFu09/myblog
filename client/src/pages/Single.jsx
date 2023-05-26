import React from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img src="https://source.unsplash.com/featured/800x600" alt="" />

                <div className="user">
                    <img src="https://source.unsplash.com/featured/1920x1080" alt="" />
                    <div className="info">
                        <span>Nick</span>
                        <p>該文章發布於2天前</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, doloribus?</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur incidunt exercitationem distinctio vero accusamus veritatis
                    magni dicta voluptate quisquam error aperiam perferendis, modi ullam atque. Nemo saepe consequuntur deleniti modi facere?
                    Assumenda, voluptatibus? Rem culpa quis aut voluptatem. Numquam itaque esse porro cumque. Voluptatem accusamus quibusdam vitae
                    odio consequuntur reiciendis ad veniam nulla ex quos neque tempore asperiores temporibus, dignissimos officia nihil voluptatum
                    enim? Nihil beatae sunt porro impedit provident sed neque blanditiis laudantium, delectus sequi, corporis doloremque, eligendi
                    velit! Dolore in iure atque totam eum unde perferendis hic, est enim exercitationem aperiam deserunt animi beatae numquam?
                    Asperiores adipisci illo, ea tempora corrupti ut tenetur esse accusamus ipsum, consequuntur nisi provident quia explicabo!
                    Repellat beatae veritatis ratione, officiis dolore sunt voluptas expedita dolor at aperiam quae unde facere excepturi illo
                    reprehenderit non? Ratione unde cum ad maxime, sunt esse beatae, reprehenderit deleniti accusantium dicta error nobis fugit!
                    Repellendus nam natus autem molestias soluta. Error
                </p>
            </div>
            <Menu />
        </div>
    );
};

export default Single;
