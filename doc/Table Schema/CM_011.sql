--+------------+-------------------------------------------------------------+
--|SYSTEM CODE | CM                                           DATE:2023/12/27|
--|SYSTEM NAME | 公用系統                                     AUTHOR:NickFu   |
--+------------+-------------------------------------------------------------+
--|TABLE       | CM_011                                                      |
--|DESCRIPTION | 系統代碼檔                                                   |
--+------------+-------------------------------------------------------------+
DROP TABLE `blog`.`cm_011`;

CREATE TABLE `blog`.`cm_011`(
`CM_011_SYSM`        VARCHAR(2)     NOT NULL,
--				        	                    系統代碼(CM:共用系統,PO:文章系統)
/*----------------------------------------------------------------------------*/
`CM_011_SNAM`       VARCHAR(20)    NOT NULL,
--					                            系統名稱
`CM_011_PGID`       VARCHAR(6)     NOT NULL,
--						                        起始程式代碼
`CM_011_FLAG`       VARCHAR(1)     NOT NULL,
--						                        備用欄位
/*------------------------------------------------------------------------------*/
`CM_011_CTDT`        DATE          NOT NULL,
--                                              建檔日期
`CM_011_CTTM`        TIME          NOT NULL,
--                                              建檔時間
`CM_011_CTUR`        VARCHAR(20)   NOT NULL,
--                                              建檔者
`CM_011_UPDT`        DATE          NOT NULL,
--                                              異動日期
`CM_011_UPTM`        TIME          NOT NULL,
--                                              異動時間
`CM_011_UPUR`        VARCHAR(20)   NOT NULL,
--                                              異動者
  UNIQUE INDEX `CM_011_SYSM_UNIQUE` (`CM_011_SYSM` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
COMMENT = '系統代碼檔';
