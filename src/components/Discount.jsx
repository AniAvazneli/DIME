function DiscountPannel() {
    return (
        <div className="DiscountPannelDiv">
            <h2 className="headlineDiscount">Add $100 to save 10%</h2>
            <div className="boundlePrice">
                <h3 className="boundlePriceH3">Boundle Price</h3>
                <h3 className="boundlePrice$"></h3>
            </div>
            <div className="yourSaving">
                <h3 className="yourSavingH3">Boundle Price</h3>
                <h3 className="yourSaving$"></h3>
            </div>
            <div class="sliders">
                <input id="rangeValue" type="range" min="0" max="27" value="0" class="slider" />
                <div id="slideEffect"></div>
            </div>
        </div>
    );
} 

export default DiscountPannel;