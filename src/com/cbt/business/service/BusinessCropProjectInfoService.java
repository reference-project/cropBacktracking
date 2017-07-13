package com.cbt.business.service;

import java.util.List;

import com.cbt.business.po.BusinessCropProjectInfo;

public interface BusinessCropProjectInfoService 
{
	/*查询一条数据*/
	public BusinessCropProjectInfo getBusinessCropProjectInfo(BusinessCropProjectInfo info);
	/*查询所有数据*/
	public List<BusinessCropProjectInfo> getAllBusinessCropProjectInfo();
	/*增加一条数据*/
	public int addBusinessCropProjectInfo(BusinessCropProjectInfo info);
	/*删除一条数据*/
	public int delBusinessCropProjectInfo(BusinessCropProjectInfo info);
}