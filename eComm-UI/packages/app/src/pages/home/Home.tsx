import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHasMounted } from "@shop/core/src/hooks";
import { useRouter } from "@shop/app/src/hooks";
import { ApplicationState } from "@shop/app/src/types";
import { makeStyles } from "@mui/styles";
import { getProducts } from "../../store/actions/home";
import * as Route from "@shop/app/src/routes/RouteDefinitions";
import ProductListings from "./ProductListings";
import ProductDetail from "./ProductDetail";
import { Loader } from "@shop/dls/src/components/loader";
import Profile from "../profile";

export interface HomeProps {
  handleNavigation?: (path) => void;
}

export const useStyles = makeStyles({
  home: {},
});

export const Home = () => {
  const classes = useStyles();
  const { history } = useRouter();
  const { products }: any = useSelector(({ home }: ApplicationState) => home);
  const [isDetailView, toggleDetailView] = useState<boolean>(false);

  const [initialized, setInitialized] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const isMounted = useHasMounted();
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      if (isMounted && !initialized && !isInitializing) {
        setIsInitializing(true);
        await dispatch(getProducts());
        setIsInitializing(false);
        setInitialized(true);
      }
    })();
  }, [isMounted, initialized, isInitializing]);

  function handleClick(path) {
    history(path);
  }

  return (
    <div className={classes.home}>
      {initialized && (
        <>
          <ProductListings products={products} handleNavigation={handleClick} />
        </>
      )}
      {isInitializing && <Loader />}
    </div>
  );
};

export default Home;
