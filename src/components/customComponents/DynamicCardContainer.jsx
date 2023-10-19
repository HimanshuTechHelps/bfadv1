import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectApiData } from "../../redux/utils/selectors";
import HomeCard from "./HomeCard";
import SearchCard from "./SearchCard";
import { HOME_CARD, SEARCH_CARD } from "../utils/Const";
import BasicPagination from "./Pagination";
import MuiButton from "@mui/material/Button";

export default function DynamicCardContainer({ component, handleValueChange, onLoadMore }) {
  const showOptions = component.showOptions;
  const apiName = component.apiName;
  const onClickApi = component.cardClickApi;
  const onClickNavigate = component.cardClickNavigate;
  const defaultPage = component.defaultPage;
  let ComponentType = component.renderComponentsInLoop.type;
  const [page, setPage] = React.useState(defaultPage);
  const [limit, setLimit] = useState(component.defaultLimit);
  const [cumulatedData, setCumulatedData] = useState([]);
  const [isBottom, setIsBottom] = useState(false);
  const [pageYOffset, setPageYOffset] = useState(0);

  const dataSelector = useSelector((state) => selectApiData(state, apiName));

  const dataToRender =
    typeof dataSelector === "object"
      ? Array.isArray(dataSelector)
        ? dataSelector
        : dataSelector.data
      : dataSelector;

  const handleScroll = () => {
    const offsetHeight = document.documentElement.offsetHeight;
    const innerHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;
    const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) <= 50;
    console.log('============= HAS REACHED BOTTOM ==============', hasReachedBottom);
    if (hasReachedBottom && isBottom === false) {
      console.log('============= HAS REACHED BOTTOM & isBottom false ==============');
      setIsBottom(true);
      handleLoadMore();
    }
    console.log('************* windows ***************', offsetHeight, innerHeight, scrollTop);

  };

  const throttle = (fn, wait) => {
    let time = Date.now();
    return function () {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  };

  useLayoutEffect(() => {
    window.scroll({ top: pageYOffset });
    setIsBottom(false);
  }, [dataToRender]);

  const handleLoadMore = () => {
    if (Array.isArray(dataToRender) && cumulatedData?.[0]?._id !== dataToRender?.[0]?._id) {
      setCumulatedData([...cumulatedData, ...dataToRender]);
    }
    setPageYOffset(window.scrollY);
    onLoadMore({ page: page + 1, limit });
    setPage(page + 1);
  };

  useEffect(() => {
    // if (component.loadMore) {
    //   window.addEventListener("scroll", throttle(handleScroll, 500));
    //   return () => {
    //     window.removeEventListener("scroll", handleScroll);
    //   };
    // }
  }, []);

  return (
    <div className={`searchdiv ${component.className}`}>
      {cumulatedData?.map((element) => {
        return (
          <>
            {ComponentType === HOME_CARD && (
              <HomeCard
                element={element}
                onClickApi={onClickApi}
                onClickNavigate={onClickNavigate}
                apiType={component.cardClickApiType}
              />
            )}
            {ComponentType === SEARCH_CARD && (
              <SearchCard
                element={element}
                onClickApi={onClickApi}
                onClickNavigate={onClickNavigate}
                classname={component.renderComponentsInLoop.className}
                apiType={component.cardClickApiType}
                showOptions={showOptions}
              />
            )}
          </>
        );
      })}
      {dataToRender?.map((element) => {
        return (
          <>
            {ComponentType === HOME_CARD && (
              <HomeCard
                element={element}
                onClickApi={onClickApi}
                onClickNavigate={onClickNavigate}
                apiType={component.cardClickApiType}
              />
            )}
            {ComponentType === SEARCH_CARD && (
              <SearchCard
                element={element}
                onClickApi={onClickApi}
                onClickNavigate={onClickNavigate}
                classname={component.renderComponentsInLoop.className}
                apiType={component.cardClickApiType}
                showOptions={showOptions}
              />
            )}
          </>
        );
      })}
      {component.loadMore && dataToRender && (
        <div className="load_more_btn_container">
          <MuiButton variant="contained" className="dcc_load_more_btn" onClick={handleLoadMore}>{component.loadMore}</MuiButton>
        </div>
      )}
      {component.paginatioName && dataToRender && (
        <BasicPagination
          paginationClass={component.paginationClass}
          handlePageChange={(e, newPage) => {
            handleValueChange({ label: "page", value: (newPage - 1) });
            setPage(newPage);
          }}
          currentPage={page || defaultPage}
          totalPages={
            typeof dataSelector === "object"
              ? dataSelector?.totalPages
              : dataToRender?.length / component.cardPerPage
          }
        />
      )}
    </div>
  );
}
