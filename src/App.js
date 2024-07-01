import { BrowserRouter as Router, Switch } from "react-router-dom";
import AuthProvider from "../src/contexts/auth";
import CommonProvider from "../src/contexts/common";
import ProductsProvider from "../src/contexts/products";
import CartProvider from "../src/contexts/cart";
import CheckoutProvider from "../src/contexts/checkout";
import RouteWrapper from "../src/layouts/RouteWrapper";
import AuthLayout from "../src/layouts/AuthLayout";
import CommonLayout from "../src/layouts/CommonLayout";
import AuthPage from "../src/pages/auth";
import HomePage from "../src/pages/home";
import CheckoutPage from "../src/pages/checkout";
import "../src/assets/scss/style.scss";
import ProductView from './components/ProductView';

const App = () => {
  return (
    <AuthProvider>
      <CommonProvider>
        <ProductsProvider>
          <CartProvider>
            <CheckoutProvider>
              <Router>
                <Switch>
                  <RouteWrapper
                    path="/"
                    exact
                    component={HomePage}
                    layout={CommonLayout}
                  />
                  <RouteWrapper
                    path="/checkout"
                    component={CheckoutPage}
                    layout={CommonLayout}
                  />
                  <RouteWrapper
                    path="/auth"
                    component={AuthPage}
                    layout={AuthLayout}
                  />
                  <RouteWrapper
                    path="/product/:id"
                    component={ProductView}
                    layout={CommonLayout}
                  />
                  {/* <Route path={'/product'}>
                    <ProductRouter>

                    </ProductRouter>
                  </Route> */}
                </Switch>
              </Router>
            </CheckoutProvider>
          </CartProvider>
        </ProductsProvider>
      </CommonProvider>
    </AuthProvider>
  );
};

// function ProductRouter() {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <ProductView></ProductView>;
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );

// }

export default App;
