const ProductSizeChart = () => {
  return (
    <table
      className="table table-bordered table-elastic table-condensed"
      style={{ fontSize: "9px" }}
    >
      <thead>
        <tr className="top">
          <th rowSpan={2} scope="col">
            Vegetables
            <br /> Serving Size
            <br /> (gram weight/
            <br /> ounce weight)
          </th>
          <th rowSpan={2} scope="col">
            Calories
          </th>
          <th rowSpan={2} scope="col">
            Calories
            <br /> from Fat
          </th>
          <th colSpan={2} scope="col">
            Total Fat
          </th>
          <th colSpan={2} scope="col">
            Sodium
          </th>
          <th colSpan={2} scope="col">
            Potassium
          </th>
          <th colSpan={2} scope="col">
            Total
            <br /> Carbo-hydrate
          </th>
          <th colSpan={2} scope="col">
            Dietary
            <br /> Fiber
          </th>
          <th scope="col">Sugars</th>
          <th scope="col">Protein</th>
          <th scope="col">Vitamin A</th>
          <th scope="col">Vitamin C</th>
          <th scope="col">Calcium</th>
          <th scope="col">Iron</th>
        </tr>
        <tr className="text-center" style={{ fontSize: "90%" }}>
          <th scope="col">(g)</th>
          <th scope="col">(%DV)</th>
          <th scope="col">(mg)</th>
          <th scope="col">(%DV)</th>
          <th scope="col">(mg)</th>
          <th scope="col">(%DV)</th>
          <th scope="col">(g)</th>
          <th scope="col">(%DV)</th>
          <th scope="col">(g)</th>
          <th scope="col">(%DV)</th>
          <th scope="col">(g)</th>
          <th scope="col">(g)</th>
          <th scope="col">(%DV)</th>
          <th scope="col">(%DV)</th>
          <th scope="col">(%DV)</th>
          <th scope="col">(%DV)</th>
        </tr>
      </thead>
      <tbody>
        <tr className="alert alert-warning">
          <th scope="row">
            Asparagus
            <br /> 5 spears
            <br /> (93 g/3.3 oz)
          </th>
          <td>20</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>230</td>
          <td>7</td>
          <td>4</td>
          <td>1</td>
          <td>2</td>
          <td>8</td>
          <td>2</td>
          <td>2</td>
          <td>10</td>
          <td>15</td>
          <td>2</td>
          <td>2</td>
        </tr>
        <tr>
          <th scope="row">
            Bell Pepper
            <br /> 1 medium
            <br /> (148 g/5.3 oz)
          </th>
          <td>25</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>40</td>
          <td>2</td>
          <td>220</td>
          <td>6</td>
          <td>6</td>
          <td>2</td>
          <td>2</td>
          <td>8</td>
          <td>4</td>
          <td>1</td>
          <td>4</td>
          <td>190</td>
          <td>2</td>
          <td>4</td>
        </tr>
        <tr className="alert alert-warning">
          <th scope="row">
            Broccoli
            <br /> 1 medium stalk
            <br /> (148 g/5.3 oz)
          </th>
          <td>45</td>
          <td>0</td>
          <td>0.5</td>
          <td>1</td>
          <td>80</td>
          <td>3</td>
          <td>460</td>
          <td>13</td>
          <td>8</td>
          <td>3</td>
          <td>3</td>
          <td>12</td>
          <td>2</td>
          <td>4</td>
          <td>6</td>
          <td>220</td>
          <td>6</td>
          <td>6</td>
        </tr>
        <tr>
          <th scope="row">
            Carrot
            <br /> 1 carrot, 7" long,
            <br /> 1 1/4" diameter
            <br /> (78 g/2.8 oz)
          </th>
          <td>30</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>60</td>
          <td>3</td>
          <td>250</td>
          <td>7</td>
          <td>7</td>
          <td>2</td>
          <td>2</td>
          <td>8</td>
          <td>5</td>
          <td>1</td>
          <td>110</td>
          <td>10</td>
          <td>2</td>
          <td>2</td>
        </tr>
        <tr className="alert alert-warning">
          <th scope="row">
            Cauliflower
            <br /> 1/6 medium head
            <br /> (99 g/3.5 oz)
          </th>
          <td>25</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>30</td>
          <td>1</td>
          <td>270</td>
          <td>8</td>
          <td>5</td>
          <td>2</td>
          <td>2</td>
          <td>8</td>
          <td>2</td>
          <td>2</td>
          <td>0</td>
          <td>100</td>
          <td>2</td>
          <td>2</td>
        </tr>
        <tr>
          <th scope="row">
            Celery
            <br /> 2 medium stalks
            <br /> (110 g/3.9 oz)
          </th>
          <td>15</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>115</td>
          <td>5</td>
          <td>260</td>
          <td>7</td>
          <td>4</td>
          <td>1</td>
          <td>2</td>
          <td>8</td>
          <td>2</td>
          <td>0</td>
          <td>10</td>
          <td>15</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr className="alert alert-warning">
          <th scope="row">
            Cucumber
            <br /> 1/3 medium
            <br /> (99 g/3.5 oz)
          </th>
          <td>10</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>140</td>
          <td>4</td>
          <td>2</td>
          <td>1</td>
          <td>1</td>
          <td>4</td>
          <td>1</td>
          <td>1</td>
          <td>4</td>
          <td>10</td>
          <td>2</td>
          <td>2</td>
        </tr>
        <tr>
          <th scope="row">
            Green (Snap) Beans
            <br /> 3/4 cup cut
            <br /> (83 g/3.0 oz)
          </th>
          <td>20</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>200</td>
          <td>6</td>
          <td>5</td>
          <td>2</td>
          <td>3</td>
          <td>12</td>
          <td>2</td>
          <td>1</td>
          <td>4</td>
          <td>10</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr className="alert alert-warning">
          <th scope="row">
            Green&nbsp;Cabbage
            <br /> 1/12 medium head
            <br /> (84 g/3.0 oz)
          </th>
          <td>25</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>20</td>
          <td>1</td>
          <td>190</td>
          <td>5</td>
          <td>5</td>
          <td>2</td>
          <td>2</td>
          <td>8</td>
          <td>3</td>
          <td>1</td>
          <td>0</td>
          <td>70</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <th scope="row">
            Green Onion
            <br /> 1/4 cup chopped
            <br /> (25 g/0.9 oz)
          </th>
          <td>10</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>10</td>
          <td>0</td>
          <td>70</td>
          <td>2</td>
          <td>2</td>
          <td>1</td>
          <td>1</td>
          <td>4</td>
          <td>1</td>
          <td>0</td>
          <td>2</td>
          <td>8</td>
          <td>2</td>
          <td>2</td>
        </tr>
        <tr className="alert alert-warning">
          <th scope="row">
            Iceberg Lettuce
            <br /> 1/6 medium head
            <br /> (89 g/3.2 oz)
          </th>
          <td>10</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>10</td>
          <td>0</td>
          <td>125</td>
          <td>4</td>
          <td>2</td>
          <td>1</td>
          <td>1</td>
          <td>4</td>
          <td>2</td>
          <td>1</td>
          <td>6</td>
          <td>6</td>
          <td>2</td>
          <td>2</td>
        </tr>
        <tr>
          <th scope="row">
            Leaf Lettuce
            <br /> 1 1/2 cups shredded
            <br /> (85 g/3.0 oz)
          </th>
          <td>15</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>35</td>
          <td>1</td>
          <td>170</td>
          <td>5</td>
          <td>2</td>
          <td>1</td>
          <td>1</td>
          <td>4</td>
          <td>1</td>
          <td>1</td>
          <td>130</td>
          <td>6</td>
          <td>2</td>
          <td>4</td>
        </tr>
        <tr className="alert alert-warning">
          <th scope="row">
            Mushrooms
            <br /> 5 medium
            <br /> (84 g/3.0 oz)
          </th>
          <td>20</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>15</td>
          <td>0</td>
          <td>300</td>
          <td>9</td>
          <td>3</td>
          <td>1</td>
          <td>1</td>
          <td>4</td>
          <td>0</td>
          <td>3</td>
          <td>0</td>
          <td>2</td>
          <td>0</td>
          <td>2</td>
        </tr>
        <tr>
          <th scope="row">
            Onion
            <br /> 1 medium
            <br /> (148 g/5.3 oz)
          </th>
          <td>45</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>5</td>
          <td>0</td>
          <td>190</td>
          <td>5</td>
          <td>11</td>
          <td>4</td>
          <td>3</td>
          <td>12</td>
          <td>9</td>
          <td>1</td>
          <td>0</td>
          <td>20</td>
          <td>4</td>
          <td>4</td>
        </tr>
        <tr className="alert alert-warning">
          <th scope="row">
            Potato
            <br /> 1 medium
            <br /> (148 g/5.3 oz)
          </th>
          <td>110</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>620</td>
          <td>18</td>
          <td>26</td>
          <td>9</td>
          <td>2</td>
          <td>8</td>
          <td>1</td>
          <td>3</td>
          <td>0</td>
          <td>45</td>
          <td>2</td>
          <td>6</td>
        </tr>
        <tr>
          <th scope="row">
            Radishes
            <br /> 7 radishes
            <br /> (85 g/3.0 oz)
          </th>
          <td>10</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>55</td>
          <td>2</td>
          <td>190</td>
          <td>5</td>
          <td>3</td>
          <td>1</td>
          <td>1</td>
          <td>4</td>
          <td>2</td>
          <td>0</td>
          <td>0</td>
          <td>30</td>
          <td>2</td>
          <td>2</td>
        </tr>
        <tr className="alert alert-warning">
          <th scope="row">
            Summer Squash
            <br /> 1/2 medium
            <br /> (98 g/3.5 oz)
          </th>
          <td>20</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>260</td>
          <td>7</td>
          <td>4</td>
          <td>1</td>
          <td>2</td>
          <td>8</td>
          <td>2</td>
          <td>1</td>
          <td>6</td>
          <td>30</td>
          <td>2</td>
          <td>2</td>
        </tr>
        <tr>
          <th scope="row">
            Sweet Corn
            <br /> kernels from 1<br /> medium ear
            <br /> (90 g/3.2 oz)
          </th>
          <td>90</td>
          <td>20</td>
          <td>2.5</td>
          <td>4</td>
          <td>0</td>
          <td>0</td>
          <td>250</td>
          <td>7</td>
          <td>18</td>
          <td>6</td>
          <td>2</td>
          <td>8</td>
          <td>5</td>
          <td>4</td>
          <td>2</td>
          <td>10</td>
          <td>0</td>
          <td>2</td>
        </tr>
        <tr className="alert alert-warning">
          <th scope="row">
            Sweet Potato
            <br /> 1 medium, 5" long,
            <br /> 2" diameter
            <br /> (130 g/4.6 oz)
          </th>
          <td>100</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>70</td>
          <td>3</td>
          <td>440</td>
          <td>13</td>
          <td>23</td>
          <td>8</td>
          <td>4</td>
          <td>16</td>
          <td>7</td>
          <td>2</td>
          <td>120</td>
          <td>30</td>
          <td>4</td>
          <td>4</td>
        </tr>
        <tr>
          <th scope="row">
            Tomato
            <br /> 1 medium
            <br /> (148 g/5.3 oz)
          </th>
          <td>25</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>20</td>
          <td>1</td>
          <td>340</td>
          <td>10</td>
          <td>5</td>
          <td>2</td>
          <td>1</td>
          <td>4</td>
          <td>3</td>
          <td>1</td>
          <td>20</td>
          <td>40</td>
          <td>2</td>
          <td>4</td>
        </tr>
      </tbody>
    </table>
  );
};
export default ProductSizeChart;