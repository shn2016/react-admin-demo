/**
 * Created by hao.cheng on 2017/4/15.
 */
import React from 'react';
import { Row, Col, Card } from 'antd';
import DisplayTable from './DisplayTable';
import BreadcrumbCustom from '../BreadcrumbCustom';

const BasicTables = () => (
    <div className="gutter-example">
        <BreadcrumbCustom first="表格" second="基础表格" />
        <Row gutter={16}>
            <Col className="gutter-row" md={24}>
                <div className="gutter-box">
                    <Card title="表格" bordered={false}>
                        <DisplayTable />
                    </Card>
                </div>
            </Col>
        </Row>
    </div>
);

export default BasicTables;