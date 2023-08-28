--------------------------
--資料表：py_001
--------------------------
--資料表中文：人員主檔
--------------------------
DROP TABLE blog.py_001;

CREATE TABLE blog.py_001 (
  py_001_usid NVARCHAR(20)   NOT NULL,
	  -- 人員編號
  /*----------------------------------------*/
  py_001_unme NVARCHAR(50)   NOT NULL,
    -- 人員暱稱
  py_001_pass NVARCHAR(255)  NOT NULL,
    -- 人員密碼
  py_001_mail NVARCHAR(255)  NOT NULL,
    -- 人員信箱
  py_001_imge NVARCHAR(255)  NOT NULL,
    -- 人員縮圖
  /*----------------------------------------*/
  py_001_cha1 NVARCHAR(255)  NOT NULL,
    -- 文字預留一
  py_001_cha2 NVARCHAR(255)  NOT NULL,
    -- 文字預留二
  py_001_cha3 NVARCHAR(255)  NOT NULL,
    -- 文字預留三
  py_001_cha4 NVARCHAR(255)  NOT NULL,
    -- 文字預留四
  py_001_cha5 NVARCHAR(255)  NOT NULL,
    -- 文字預留五
  /*----------------------------------------*/
  py_001_ctdt DATETIME 		   NOT NULL,
    -- 建立日期
  py_001_ctno NVARCHAR(40)   NOT NULL,
    -- 建立人員
  py_001_updt DATETIME 		   NOT NULL,
    -- 更新日期
  py_001_upno NVARCHAR(40)   NOT NULL,
    -- 更新人員
  UNIQUE INDEX py_001_usid_UNIQUE (py_001_usid ASC));
