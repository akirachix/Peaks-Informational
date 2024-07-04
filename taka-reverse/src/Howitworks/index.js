import './index.css'



const Howitworks = ()  =>{
    return(
        <div id='howitworks-container'>
        <div>
            <h1 className='howitworks'>How It Works </h1>
        </div>
         <div id='container'>

        <div id='step-one'>
          <h2>1.Collection</h2>
          <p> We have collection bins placed at drop-off points where people donate their unused.</p>
          <img src='/images/drop-bin.jpg' alt='collection' className='image'/>
        </div>

        <div id='step-two'>
            <h2>2.Sorting</h2>
            <p>Clothes are sorted according to grade, this refers to the quality of the clothes.</p>
            <img src='/images/sorting.jpg' alt='sorting' className='image'/>
        </div>

        <div id='step-three'>
            <h2>3.Weaving</h2>
            <p>The workers weave different products from different materials that are sold.</p>
            <img src='/images/weave.jpg' alt='weaving' className='image'/>
        </div>

        <div id='step-four'>
            <h2>4.Selling</h2>
            <p>The clothes that are not recycled are therefore selled to customers.</p>
            <img src='/images/donation.png' alt='donation' className='image'/>
        </div>

        </div>
        </div>
    );
}

export default Howitworks;