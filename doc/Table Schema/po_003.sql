--------------------------
--資料表：po_003
--------------------------
--資料表中文：文章主檔
--------------------------
DROP TABLE blog.po_003;

CREATE TABLE blog.po_003 (
  po_003_titl NVARCHAR(255)  NOT NULL,
	-- 文章標題
  po_003_cate NVARCHAR(45)   NOT NULL,
	-- 文章分類 (子底階層)
  /*----------------------------------------*/
  po_003_desc NVARCHAR(4096) NOT NULL,
    -- 文章內容
  po_003_stat NVARCHAR(8) 	 NOT NULL,
    -- 文字狀態 (Y=公開, N=不公開)
  po_003_mark NVARCHAR(255)  NOT NULL,
    -- 文章標記 (格式JSON陣列)
  po_003_imge NVARCHAR(255)          ,
    -- 文章縮圖 (路徑)
  po_003_view INT            NOT NULL,
    -- 觀看人數
  /*----------------------------------------*/
  po_003_cha1 NVARCHAR(255)  NOT NULL,
    -- 文字預留一
  po_003_cha2 NVARCHAR(255)  NOT NULL,
    -- 文字預留二
  po_003_cha3 NVARCHAR(255)  NOT NULL,
    -- 文字預留三
  po_003_cha4 NVARCHAR(255)  NOT NULL,
    -- 文字預留四
  po_003_cha5 NVARCHAR(255)  NOT NULL,
    -- 文字預留五
  po_003_cha6 NVARCHAR(255)  NOT NULL,
    -- 文字預留六
  po_003_cha7 NVARCHAR(255)  NOT NULL,
    -- 文字預留七
  po_003_cha8 NVARCHAR(255)  NOT NULL,
    -- 文字預留八
  po_003_cha9 NVARCHAR(255)  NOT NULL,
    -- 文字預留九
  po_003_cha0 NVARCHAR(255)  NOT NULL,
    -- 文字預留十
  /*----------------------------------------*/
  po_003_ctdt DATETIME 		   NOT NULL,
    -- 建立日期
  po_003_ctno NVARCHAR(40)   NOT NULL,
    -- 建立人員
  po_003_updt DATETIME 		   NOT NULL,
    -- 更新日期
  po_003_upno NVARCHAR(40)   NOT NULL,
    -- 更新人員
  UNIQUE INDEX po_003_titl_UNIQUE (po_003_titl ASC));
  CREATE INDEX po_003_cate_UNIQUE ON po_003(po_003_cate);
