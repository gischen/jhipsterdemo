package com.esrichina.demo2.cucumber.stepdefs;

import com.esrichina.demo2.Demo2App;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = Demo2App.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
