--+------------+-------------------------------------------------------------+
--|SYSTEM CODE | CH                                          DATE:27/09/2023 |
--|SYSTEM NAME | 公用系統                                      AUTHOR:NickFu |
--+------------+-------------------------------------------------------------+
--|TABLE       | PY_001                                                      |
--|DESCRIPTION | 人員主檔                                                    |
--+------------+-------------------------------------------------------------+

DROP TABLE `blog`.`py_001`;

CREATE TABLE `blog`.`py_001` (
  `PY_001_USID` VARCHAR(20)   NOT NULL,
   --                                      人員編號
  /*-----------------------------------------------------*/
  `PY_001_NAME` VARCHAR(50)   NOT NULL,
   --                                      人員姓名
  `PY_001_PASS` VARCHAR(255)  NOT NULL,
   --                                      人員密碼
  `PY_001_MAIL` VARCHAR(255)  NOT NULL,
   --                                      人員信箱
  `PY_001_IMGE` VARCHAR(255)  NULL,
   --                                      人員縮圖
  /*-----------------------------------------------------*/
  `PY_001_CHA1` VARCHAR(255)  NOT NULL,
   --                                      文字預留一
  `PY_001_CHA2` VARCHAR(255)  NOT NULL,
   --                                      文字預留二
  `PY_001_CHA3` VARCHAR(255)  NOT NULL,
   --                                      文字預留三
  /*-----------------------------------------------------*/
  `PY_001_CTDT` DATE          NOT NULL,
   --                                      建立日期
  `PY_001_CTTM` TIME          NOT NULL,
   --                                      建立時間
  `PY_001_CTUR` VARCHAR(20)   NOT NULL,
   --                                      建立者
  `PY_001_UPDT` DATE          NOT NULL,
   --                                      異動日期
  `PY_001_UPTM` TIME          NOT NULL,
   --                                      異動時間
  `PY_001_UPUR` VARCHAR(20)   NOT NULL,
   --                                      異動者
  UNIQUE INDEX `PY_001_USID_UNIQUE` (`PY_001_USID` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
COMMENT = '人員主檔';
