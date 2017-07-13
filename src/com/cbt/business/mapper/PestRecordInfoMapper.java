package com.cbt.business.mapper;

import java.util.List;

import com.cbt.business.po.PestRecordInfo;

public interface PestRecordInfoMapper {
	/*查询一条数据*/
	public PestRecordInfo getPestRecordinfo(PestRecordInfo info);
	/*查询所有数据*/
	public List<PestRecordInfo> getAllPestRecordinfo();
	/*增加一条数据*/
	public int addPestRecordInfo(PestRecordInfo info);
	/*删除一条数据*/
	public int delPestRecordInfo(PestRecordInfo info);
	
	//溯源信息查询之，病虫害记录
	public List<PestRecordInfo> queryPestByBtCode(String sowSeg_btCode)throws Exception;
}