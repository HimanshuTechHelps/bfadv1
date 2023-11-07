import React from 'react';
import AutoFetchApi from "../customComponents/AutoFetchApi.jsx";
import { ALTER_USER_DATA, GET, GET_CUSTOMER_CONTACTED, LOADING } from '../utils/Const.js';
import { useSelector } from 'react-redux';
import { selectApiData, selectApiStatus } from "../../redux/utils/selectors.js";
import { CircularProgress } from "@mui/material";
import { Card } from "react-bootstrap";
import TableButtonHeader from '../utils/TableButtonHeader.js';
import ListingTable from '../utils/ListingTable.js';

function CustomerManagement() {
    const desktopHeaders = {
        "Name": "name",
        "Phone Number": "phoneNumber",
        "Plot No.": "plotNumber",
        "Location": "location",
        "Title": "title",
        "Price": "price"
    };
    const tableData = {};
    const dataApi = "";
    const apiStatus = useSelector((state) =>
        selectApiStatus(state, GET_CUSTOMER_CONTACTED || "")
    );

    // add recommendation(search & select property) --- 
    // plot no, location, title, accommodation, possession, facing, updated at
    // actions : recommend

    // show recommendations ---
    // plot no, location, title, accommodation, possession, facing, updatedAt, customer response, customer remark
    // actions : unrecommend

    return (
        <>
            {!tableData && <AutoFetchApi url={dataApi} method={GET} />}
            {apiStatus === LOADING ? (
                <CircularProgress className="loader-class" />
            ) : (
                <div className="sub_page user_management_page">
                    <Card>
                        <Card.Header className="card_header font">Customer Details</Card.Header>
                        <Card.Body className="card_body">
                            <ListingTable
                                headersDesktop={desktopHeaders}
                                headersMobile={desktopHeaders}
                                editApi={{}}
                                deleteApi={{}}
                                getDataApi={{}}
                                filterDataUrl={{}}
                                itemCount={{}}
                                refreshDataApi={{}}
                                showRecommendationActions={true}
                            />
                        </Card.Body>
                    </Card>
                </div>
            )}
        </>
    );
}

export default CustomerManagement;