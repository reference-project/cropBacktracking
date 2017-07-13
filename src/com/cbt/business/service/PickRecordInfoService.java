package com.cbt.business.service;

import java.util.List;

import com.cbt.business.po.PickRecordInfo;

public interface PickRecordInfoService {
	
	public PickRecordInfo getPickRecordInfo(PickRecordInfo info);

	
	public List<PickRecordInfo> getAllPickRecordInfo();
	
	public int addPickRecordInfo(PickRecordInfo info);
	
	public int delPickRecordInfo(PickRecordInfo info);
	
	//溯源信息查询之，采摘记录 
	public PickRecordInfo queryPickByBtCode(String pickSeg_btCode)throws Exception;
}
