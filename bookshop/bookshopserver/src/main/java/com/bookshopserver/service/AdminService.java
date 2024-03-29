package com.bookshopserver.service;

import com.bookshopserver.dao.AdminInfoDao;
import com.bookshopserver.model.AdminInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private AdminInfoDao adminInfoDao;

    public AdminInfo login(String name,String pwd){
        AdminInfo admin=this.adminInfoDao.getAdminInfoName(name);
        if (admin==null){
            return null;
        }
        String password=admin.getpwd();
        if(password!=null) {
            if (password.equals(pwd))
                return admin;
        }
        return null;
    }

}
