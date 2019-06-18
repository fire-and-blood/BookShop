package com.bookshopserver.dao;

import com.bookshopserver.model.AdminInfo;
import com.bookshopserver.model.UserInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

@Mapper
@Component
public interface AdminInfoDao {
    @Select("select * from admininfo where name = #{'name'}")
    public AdminInfo getAdminInfoName(String name);
}
