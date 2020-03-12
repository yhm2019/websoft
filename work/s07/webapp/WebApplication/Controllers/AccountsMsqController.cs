﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication.Models;

namespace WebApplication.Controllers
{
    public class AccountsMsqController : Controller
    {
        public IActionResult Index()
        {
            WebsoftContext context = HttpContext.RequestServices.GetService(typeof(WebApplication.Models.WebsoftContext)) as WebsoftContext;
            return View(context.GetAllAccounts());
        }
    }
}