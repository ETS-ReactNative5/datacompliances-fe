import React from 'react';
import TenderKoTable from 'components/common/XcelPayTable';

const ReceiptTable = (props) => {
    const {
        headers, tableData, loading, page, perPage, onPaginate
    } = props;
    return (
        <div className="mt-3">
            <TenderKoTable
                headers={headers} tableData={tableData} loading={loading}
                page={page} perPage={perPage} onPaginate={onPaginate}
            />
        </div>
    )
}

export default ReceiptTable;