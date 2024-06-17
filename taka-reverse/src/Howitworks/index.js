import './index.css'


const Howitworks = ()  =>{
    return(
        <div>
        <div>
            <h1 className='howitworks'>How It Works </h1>
        </div>
         <div id='container'>

        <div id='step-one'>
          <h2>1.COLECTION</h2>
          <p> We have act collection bins placed at drop-off points in Nairobi where people donate their unused clothes.</p>
          <img src='/images/drop-bin.jpg' alt='collection' className='image'/>
        </div>

        <div id='step-two'>
            <h2>2.SORTING</h2>
            <p>Clothes are sorted according to grade, this refers to the quality of the clothes.</p>
            <img src='/images/sorting.jpg' alt='sorting' className='image'/>
        </div>

        <div id='step-three'>
            <h2>3.WEAVING</h2>
            <p>The workers weave different products from jeans and other materials that are therefore sold.</p>
            <img src='/images/weave.jpg' alt='weaving' className='image'/>
        </div>

        <div id='step-four'>
            <h2>4.DONATION</h2>
            <p>The clothes that are not recycled are therefore donated to various charity homes.</p>
            <img src='/images/donation.png' alt='donation' className='image'/>
        </div>

        </div>
        </div>
    );
}

export default Howitworks;