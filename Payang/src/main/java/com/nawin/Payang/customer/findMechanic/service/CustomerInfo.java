package com.nawin.Payang.customer.findMechanic.service;

import com.nawin.Payang.customer.findMechanic.model.CustomerData;
import lombok.Data;

import java.util.HashMap;
import java.util.Map;

@Data
public class CustomerInfo {

    Map<String, CustomerData> customerList = new HashMap<String, CustomerData>();
    public CustomerInfo(){
        CustomerData asfdfwfwef3432 = new CustomerData("ty12343",
                "sdfdsfsd7f98sd7fsdsdf8", "Tomyum", "Kung");
        CustomerData asfdfdfgdfg456 = new CustomerData("tasfsa3",
                "sdfdsfsxcvxcvxcvxcvxx8", "Kang", "Keawwhan");
        customerList.put("asfdfwfwef3432", asfdfwfwef3432);
        customerList.put("asfdfdfgdfg456", asfdfdfgdfg456);

    }

}
